namespace Candidate.Application.Interface
{
    public interface ICandidateRepository
    {
        Task<IEnumerable<Domain.Candidate>> GetAllCandidates();
        Task<Domain.Candidate> GetCandidateById(int id);
        Task AddCandidate(Domain.Candidate candidate);
        Task UpdateCandidate(Domain.Candidate candidate);
        Task DeleteCandidateById(int id);
    }
}