namespace YouPub.Context.Entities
{
    public class User
    {
        public int UserID { get; set; }
        public string Name { get; set; }
        public string Auth0ID { get; set; }
        public string Email { get; set; }
    }
}