using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FindMusicianApi.Models;

namespace FindMusicianApi.Controllers {

    [ApiController]
    [Route("[controller]")]
    public class BookingController : ControllerBase {

        private readonly FindMusicianContext _context;

        public BookingController(FindMusicianContext context){
            _context = context;
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

        [HttpPost]
        public async Task<Booking> Post(Booking newBooking){
            _context.Booking.Add(newBooking);
            await _context.SaveChangesAsync();
            return newBooking;
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