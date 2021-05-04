using System.Collections.Generic;
using System.Threading.Tasks;
using FindMusicianApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FindMusicianApi.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class NewsletterController : ControllerBase {

        private readonly FindMusicianContext _context;

        public NewsletterController(FindMusicianContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Newsletter>> Get(){
            List<Newsletter> newsletterList = await _context.Newsletter.ToListAsync();
            return newsletterList;
        }

    }
    
}