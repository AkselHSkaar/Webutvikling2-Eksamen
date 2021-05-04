using Microsoft.EntityFrameworkCore;

namespace FindMusicianApi.Models {

    public class FindMusicianContext : DbContext {
        
        public FindMusicianContext( DbContextOptions<FindMusicianContext> options ):base(options){}

        public DbSet<Artist> Artist { get; set; }

        public DbSet<Booking> Booking { get; set; }

        public DbSet<Review> Review { get; set; }

        public DbSet<Genre> Genre { get; set; }

        public DbSet<Newsletter> Newsletter { get; set; }
        
    }

}