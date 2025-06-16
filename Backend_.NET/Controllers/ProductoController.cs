using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SH1_Back.Models;
using Microsoft.EntityFrameworkCore;

namespace SH1_Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly BurrosDonPepeContext DBContext;
        public ProductoController(BurrosDonPepeContext context)
        {
            DBContext = context;
        }

        [HttpGet]
        [Route("get_productos")]
        public async Task<ActionResult> Get()
        {
            var listaProductos = await DBContext.Productos.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, listaProductos);
        }

        [HttpGet]
        [Route("get_producto/{id:int}")]
        public async Task<ActionResult> Get(int id)
        {
            var producto = await DBContext.Productos.FirstOrDefaultAsync(p => p.Id == id);
            return StatusCode(StatusCodes.Status200OK, producto);
        }

        [HttpPost]
        [Route("agregar_producto")]
        public async Task<ActionResult> New([FromBody] Producto producto)
        {
            await DBContext.Productos.AddAsync(producto);
            await DBContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
        }

        [HttpPut]
        [Route("actualizar_producto")]
        public async Task<ActionResult> Edit([FromBody] Producto producto)
        {
            DBContext.Productos.Update(producto);
            await DBContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
        }

        [HttpDelete]
        [Route("eliminar_producto/{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {
            var producto = await DBContext.Productos.FirstOrDefaultAsync(p => p.Id == id);
            if (producto == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, new { mensaje = "Producto no encontrado" });
            }
            DBContext.Productos.Remove(producto);
            await DBContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
        }
    }
}
