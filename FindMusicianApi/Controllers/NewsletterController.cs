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

        [HttpGet("{id}")]
        public async Task<Newsletter> Get(int id){
            Newsletter newsletter = await _context.Newsletter.FirstAsync( _newsletter => _newsletter.Id == id );
            return newsletter;
        }

        [HttpPost]
        public async Task<Newsletter> Post(Newsletter newNewsletter){
            _context.Newsletter.Add(newNewsletter);
            await _context.SaveChangesAsync();
            return newNewsletter;
        }

        [HttpPut]
        public async Task<Newsletter> Put(Newsletter newsletter){
            _context.Update( newsletter );
            await _context.SaveChangesAsync();
            return newsletter;
        }

        [HttpDelete("{id}")]
        public async Task<Newsletter> Delete(int id){
            Newsletter newsletterToDelete = await _context.Newsletter.FirstOrDefaultAsync(newsletter => newsletter.Id == id);
            _context.Remove(newsletterToDelete);
            await _context.SaveChangesAsync();
            return newsletterToDelete;
        }

    }
    
}