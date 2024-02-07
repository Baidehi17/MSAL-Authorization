using Candidate.API.DTO;
using Candidate.Application.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace Candidate.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly ICandidateService candidateService;

        public CandidateController(ICandidateService candidateService)
        {
            this.candidateService = candidateService;
        }

        [HttpGet]
        [Authorize(Roles = "candidate.Read.All")]
        public async Task<ActionResult<IEnumerable<CandidateDTO>>> GetCandidates()
        {
            var candidates = await this.candidateService.GetAllCandidates();
            IEnumerable<CandidateDTO> lists = AutoMapper<Domain.Candidate, CandidateDTO>.Map(candidates);
            return candidates == null ? NotFound() : Ok(lists.ToList());
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "candidate.ReadWrite.All")]
        public async Task<ActionResult<CandidateDTO>> GetCandidateById(int id)
        {
            CandidateDTO candidateDetail = AutoMapper<Domain.Candidate, CandidateDTO>.Map(await this.candidateService.GetCandidateById(id));
            return candidateDetail == null ? NotFound() : Ok(candidateDetail);   
        }

        [HttpPut]
        [Authorize(Roles = "candidate.ReadWrite.All")]
        public async Task updateCandidate(CandidateDTO candidate)
        {
            Domain.Candidate candidateDetail = AutoMapper<CandidateDTO, Domain.Candidate>.Map(candidate);
            await this.candidateService.UpdateCandidate(candidateDetail);
        }

        [HttpPost]
        [Authorize(Roles = "candidate.ReadWrite.All")]
        public async Task AddCandidate(CandidateDTO candidate)
        {
            Domain.Candidate candidateDetail = AutoMapper<CandidateDTO, Domain.Candidate>.Map(candidate);
            await this.candidateService.AddCandidate(candidateDetail);
        }

        [HttpDelete]
        [Authorize(Roles = "candidate.ReadWrite.All")]
        public async Task DeleteCandidate(int id)
        {
            await this.candidateService.DeleteCandidateById(id);
        }

    }
}
