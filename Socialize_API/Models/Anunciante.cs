namespace Socialize_API.Models
{
    public class Anunciante
    {
        public int Id { get; set; }
        public string nomeTitular { get; set; }
        public string Email { get; set; }
        public string emailContato { get; set; }
        public string Senha { get; set; }
        public string cpfTitular { get; set; }
        public string razaoSocial { get; set; }
        public string Cnpj { get; set; }
        public string nomeFantasia { get; set; }
        public string inscricaoEstadual { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string numEndereco { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Uf { get; set; }
        public string Cep { get; set; }
        public string Ativo { get; set; }
        public string Perfil { get; set; }
    }
}