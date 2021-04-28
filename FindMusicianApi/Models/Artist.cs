using System.ComponentModel.DataAnnotations;

namespace FindMusicianApi.Models {

    public class Artist {

        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Genre { get; set; }

        public double Price { get; set; }

        public string Instrument { get; set; }

        public string Biography { get; set; }

        public double Rating { get; set; }

        public string Image { get; set; }

    }
    
}