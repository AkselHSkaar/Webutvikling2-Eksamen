using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FindMusicianApi.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Linq;

namespace FindMusicianApi.Controllers {

    [ApiController]
    [Route("[controller]")]
    public class ArtistController : ControllerBase {

        private readonly FindMusicianContext _context;

        private readonly IWebHostEnvironment _hosting;

        public ArtistController( FindMusicianContext context, IWebHostEnvironment hosting ){
            _context = context;
            _hosting = hosting;
        }

        [HttpGet]
        public async Task<IEnumerable<Artist>> Get(){
            List<Artist> artistList = await _context.Artist.ToListAsync();
            return artistList;
        }

        [HttpGet("{id}")]
        public async Task<Artist> Get(int id){
            Artist artist = await _context.Artist.FirstAsync( _artist => _artist.Id == id );
            return artist;
        }

        [HttpGet]
        [Route("[action]/{name}")]
        public async Task<Artist> GetByName(string Name){
            Artist artist = await _context.Artist.FirstAsync( _artist => _artist.Name.ToLower() == Name.ToLower() );
            return artist;
        }

        [HttpGet("Search/{name}")]
        public async Task<IEnumerable<Artist>> Get(string name){
            List<Artist> artistList = await _context.Artist.Where(
                artist => artist.Name.ToLower()
                .Contains(name.ToLower())
            ).ToListAsync();

            return artistList;
        }

        [HttpPost]
        public async Task<Artist> Post(Artist newArtist){
            _context.Artist.Add(newArtist);
            await _context.SaveChangesAsync();
            return newArtist;
        }

        [HttpPost]
        [Route("[action]")]
        public void UploadImage(IFormFile file){
            string webRootPath = _hosting.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");
            using(var fileStream = new FileStream( absolutePath, FileMode.Create )){
                file.CopyTo( fileStream );
            }
        }

        [HttpPut]
        public async Task<Artist> Put(Artist artist){
            _context.Update( artist );
            await _context.SaveChangesAsync();
            return artist;
        }

    }

}