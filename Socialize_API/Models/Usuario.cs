namespace Socialize_API.Models
{
    public class Usuario
    {
        // public static object Identity { get; internal set; }
        public int Id { get; set; }
        
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Celular { get; set; }
        public string Sexo { get; set; }
        public string Endereco { get; set; }
        public string numEndereco { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Uf { get; set; }
        public string Cep { get; set; }
        public string diaNasc { get; set; }
        public string mesNasc { get; set; }
        public string anoNasc { get; set; }
        public string Ativo { get; set; }

        public string Perfil { get; set; }
    }
}