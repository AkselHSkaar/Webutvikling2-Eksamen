using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FindMusicianApi.Models;

namespace FindMusicianApi.Controllers {

    [ApiController]
    [Route("[controller]")]
    public class ReviewController : ControllerBase {

        private readonly FindMusicianContext _context;

        public ReviewController(FindMusicianContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Review>> Get(){
            List<Review> reviewList = await _context.Review.ToListAsync();
            return reviewList;
        }

        [HttpGet("{id}")]
        public async Task<Review> Get(int id){
            Review review = await _context.Review.FirstAsync( _review => _review.Id == id );
            return review;
        }

        [HttpPost]
        public async Task<Review> Post(Review newReview){
            _context.Review.Add( newReview );
            await _context.SaveChangesAsync();
            return newReview;
        }

        [HttpPut]
        public async Task<Review> Put(Review review){
            _context.Update( review );
            await _context.SaveChangesAsync();
            return review;
        }

        [HttpDelete("{id}")]
        public async Task<Review> Delete(int id){
            Review reviewToDelete = await _context.Review.FirstOrDefaultAsync(review => review.Id == id);
            _context.Remove(reviewToDelete);
            await _context.SaveChangesAsync();
            return reviewToDelete;
        }

    }

}