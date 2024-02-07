using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Candidate.Application.Interface
{
    public interface ICandidateService
    {
        Task<IEnumerable<Domain.Candidate>> GetAllCandidates();
        Task<Domain.Candidate> GetCandidateById(int id);
        Task AddCandidate(Domain.Candidate candidate);
        Task UpdateCandidate(Domain.Candidate candidate);
        Task DeleteCandidateById(int id);
    }
}
