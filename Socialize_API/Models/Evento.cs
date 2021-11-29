namespace Socialize_API.Models
{
    public class Evento
    {
        public int id { get; set; }
        public string nomeEvento { get; set; }
        public string urlImg { get; set; }
        public string dataEvento { get; set; }
        public int idCategoria { get; set; }
        public string descEvento { get; set; }
        public int idAnunciante { get; set; }
        public string cep { get; set; }
        public string logradouro { get; set; }
        public string numero { get; set; }
        public string bairro { get; set; }
        public string cidade { get; set; }
        public string uf { get; set; } 
    }
}