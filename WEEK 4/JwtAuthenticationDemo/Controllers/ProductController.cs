using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthenticationDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(new
            {
                Message = "Welcome! You are authenticated."
            });
        }
    }
}
