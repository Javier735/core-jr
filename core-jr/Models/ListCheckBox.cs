namespace core_jr.Models
{
    public class ListCheckBox
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public string Property { get; set; }
    }
    public class FormAddUserRol
    {
        public string UserId { get; set; }
        public List<string> Values { get; set; }
    }

}
