using Candidate.Application.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Candidate.Application.Implementation
{
    public class CandidateService : ICandidateService
    {
        private readonly ICandidateRepository candidateRepository;

        public CandidateService(ICandidateRepository candidateRepository)
        {
            this.candidateRepository = candidateRepository;
        }

        public async Task AddCandidate(Domain.Candidate candidate)
        {
            await this.candidateRepository.AddCandidate(candidate);
        }

        public async Task DeleteCandidateById(int id)
        {
             await this.candidateRepository.DeleteCandidateById(id);
        }

        public async Task<IEnumerable<Domain.Candidate>> GetAllCandidates()
        {
            return await this.candidateRepository.GetAllCandidates();
        }

        public async Task<Domain.Candidate> GetCandidateById(int id)
        {
            return await this.candidateRepository.GetCandidateById(id);
        }

        public async Task UpdateCandidate(Domain.Candidate candidate)
        {
             await this.candidateRepository.UpdateCandidate(candidate);
        }
    }
}
