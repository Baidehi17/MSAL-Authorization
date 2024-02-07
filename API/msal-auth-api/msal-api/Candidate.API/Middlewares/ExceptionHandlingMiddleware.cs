using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Candidate.API
{
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionHandlingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                httpContext.Response.ContentType = "application / json";
                var response = new DTO.ErrorResponse
                {
                    ErrorMessage = ex.Message,
                    StatusCode = httpContext.Response.StatusCode
                };
                var responseJson = JsonSerializer.Serialize(response);
                await httpContext.Response.WriteAsync(responseJson);
            }
        }
    } 
    public static class MiddlewareExampleExtensions
    {
        public static IApplicationBuilder ExceptionHandling(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ExceptionHandlingMiddleware>();
        }
    }
}
