using System;
using System.Collections.Generic;
using Candidate.Domain;
using Candidate.Application.Interface;
using Candidate.Infrastructure.Dbcontext;
using Microsoft.EntityFrameworkCore;

namespace Candidate.Infrastructure
{
    public class CandidateRepository : ICandidateRepository
    {
        private readonly CandidateDbContext dbContext;
        public CandidateRepository(CandidateDbContext candidateDb)
        {
            this.dbContext = candidateDb;
        }
        public async Task AddCandidate(Domain.Candidate candidate)
        {
            await dbContext.candidates.AddAsync(candidate);
            await dbContext.SaveChangesAsync();
        }

        public async Task DeleteCandidateById(int id)
        {
            var candidate = await GetCandidateById(id);
            dbContext.candidates.Remove(candidate);
            await dbContext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Domain.Candidate>> GetAllCandidates()
        {
            return await dbContext.candidates.ToListAsync();
        }

        public async Task<Domain.Candidate> GetCandidateById(int id)
        {
            var candidate = await dbContext.candidates.FindAsync(id);
            if (candidate != null)
            {
                return candidate;
            }
            return candidate;
        }

        public async Task UpdateCandidate(Domain.Candidate candidate)
        {
            //throw new NotImplementedException();

            dbContext.candidates.Update(candidate);
            await dbContext.SaveChangesAsync();
        }
    }
}