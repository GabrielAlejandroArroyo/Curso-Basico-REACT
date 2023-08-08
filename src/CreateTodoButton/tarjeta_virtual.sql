insert into transitorio..cl_full_tv_cuentas_cuil_hbc 
select  distinct ente.en_ente as ID_COBIS, 
		'990029' + replicate('0', (10 - len(cast(ente.en_ente as varchar)))) + CAST(ente.en_ente AS VARCHAR(10)) as TARJETA_VIRTUAL,
		cuenta.ah_cta_banco AS CUENTA_FORMATO_COBIS, 
		cob_remesas.dbo.fu_li_formato_cta ('C', cuenta.ah_cta_banco) as CUENTA_FORMATO_LINK,
		cuenta.ah_moneda as MONEDA_CUENTA, 
		ente.en_ced_ruc as CUIL, 
        cuenta.ah_cbu as CBU,
		cuenta.ah_producto as PRODUCTO,
		cliente.cl_rol as ROL_CLIENTE_CUENTA

	from cobis..cl_cliente cliente join cobis..cl_ente ente on ente.en_ente = cliente.cl_cliente
								   join cobis..cl_det_producto producto on cliente.cl_det_producto = producto.dp_det_producto
								   join cob_ahorros..ah_cuenta cuenta on cuenta.ah_cta_banco = producto.dp_cuenta
								  
	--Titular (T)- Apoderado (S) - Cotitular (A)
	--C = conjunta, U = unipersonal y I = indistinta
			where cliente.cl_rol in (select distinct ca.codigo from cl_catalogo ca where ca.tabla = @NumeroTabla and ca.estado = 'V') and cuenta.ah_uso_firma != 'C'
				  and cuenta.ah_estado = 'A' and ente.en_subtipo = 'P' and producto.dp_producto = 4 and producto.dp_estado_ser = 'V' and cuenta.ah_tipocta = 'P'
				  and cuenta.ah_categoria not in (select distinct ca.codigo from cl_catalogo ca where ca.tabla = @NumeroTablaCuentaHBC and ca.estado = 'V')
				  
##############################################################


BEGIN

if exists (select 1 from cob_remesas..sysobjects where name = 'li_d_link_tarjeta_virtual_hbc')  
	truncate table cob_remesas..li_d_link_tarjeta_virtual_hbc
	
insert into cob_remesas..li_d_link_tarjeta_virtual_hbc

Select distinct 
		TARJETA_VIRTUAL,
		PRODUCTO,
		CUENTA_FORMATO_COBIS
	from transitorio..cl_full_tv_cuentas_cuil_hbc order by TARJETA_VIRTUAL asc
	
	-- - MANDO AL HISTORICO LOS ERRORES

     if @@error != 0
      begin
         /*  ERROR DE INSERCION EN LA TABLA  */
         exec cobis..sp_cerror
         @t_debug  = 'N',
         @t_file   = 'No genera archivo',
         @t_from   = @w_d_sp_name,
		 @i_msg = 'Se ha producido un error al ejecutar el SP cobis..sp_hbc_carga_tarjeta_virtual_cuenta',
         @i_num    = 123001
         --return 123001
      end
END