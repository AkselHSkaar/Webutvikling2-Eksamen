using System.ComponentModel.DataAnnotations;

namespace FindMusicianApi.Models {

    public class Booking {

        [Key]
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Date { get; set; }

        public string StartTime { get; set; }

        public string EndTime { get; set; }

        public string Genre { get; set; }

        public int Price { get; set; }

        public string CustomerName { get; set; }

        public string CustomerEmail { get; set; }

        public string CustomerPhone { get; set; }

    }
    
}