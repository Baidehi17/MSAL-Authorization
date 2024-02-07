using System;
namespace Candidate.Domain
{
    public class Candidate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Location { get; set; }
        public string Email { get; set; }
    }
}