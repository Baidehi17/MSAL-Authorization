using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Candidate.Infrastructure.Dbcontext
{
    public class CandidateDbContext : DbContext
    {
        public CandidateDbContext() { }
        public CandidateDbContext(DbContextOptions<CandidateDbContext> options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=TL217;Database=candidateDB;Trusted_Connection=True;MultipleActiveResultSets=true;Integrated Security=True;Encrypt=False");
        }
        public DbSet<Domain.Candidate> candidates{ get; set; }

    }
}
