using System.Collections.Generic;
using System.Threading.Tasks;
using FindMusicianApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FindMusicianApi.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class GenreController : ControllerBase {

        private readonly FindMusicianContext _context;

        public GenreController(FindMusicianContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Genre>> Get(){
            List<Genre> genreList = await _context.Genre.ToListAsync();
            return genreList;
        }

        [HttpGet]
        [Route("[action]/{name}")]
        public async Task<Genre> GetByName(string Name){
            Genre genre = await _context.Genre.FirstAsync( _genre => _genre.Name.ToLower() == Name.ToLower() );
            return genre;
        }

    }
    
}