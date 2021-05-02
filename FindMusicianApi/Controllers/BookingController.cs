using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FindMusicianApi.Models;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace FindMusicianApi.Controllers {

    [ApiController]
    [Route("[controller]")]
    public class BookingController : ControllerBase {

        private readonly FindMusicianContext _context;
        private readonly IWebHostEnvironment _hosting;
        

        public BookingController(FindMusicianContext context, IWebHostEnvironment hosting ){
            _context = context;
            _hosting = hosting;
        }

        [HttpGet]
        public async Task<IEnumerable<Booking>> Get(){
            List<Booking> bookingList = await _context.Booking.ToListAsync();
            return bookingList;
        }

        [HttpGet("{id}")]
        public async Task<Booking> Get(int id){
            Booking booking = await _context.Booking.FirstAsync( _booking => _booking.Id == id );
            return booking;
        }

        [HttpGet("Search/{title}")]
        public async Task<IEnumerable<Booking>> Get(string title){
            List<Booking> bookingList = 
            await _context.Booking.Where(booking => booking.Title.ToLower().Contains(title.ToLower())).ToListAsync();
            return bookingList;
        }

        [HttpPost]
        public async Task<Booking> Post(Booking newBooking){
            _context.Booking.Add(newBooking);
            await _context.SaveChangesAsync();
            return newBooking;
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
        public async Task<Booking> Put(Booking booking){
            _context.Update( booking );
            await _context.SaveChangesAsync();
            return booking;
        }

        [HttpDelete("{id}")]
        public async Task<Booking> Delete(int id){
            Booking bookingToDelete = await _context.Booking.FirstOrDefaultAsync(booking => booking.Id == id);
            _context.Remove(bookingToDelete);
            await _context.SaveChangesAsync();
            return bookingToDelete;
        }

    }

}