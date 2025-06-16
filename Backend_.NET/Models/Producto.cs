using System;
using System.Collections.Generic;

namespace SH1_Back.Models;

public partial class Producto
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public int Precio { get; set; }

    public string? Descripcion { get; set; }

    public string? Imagen { get; set; }
}
