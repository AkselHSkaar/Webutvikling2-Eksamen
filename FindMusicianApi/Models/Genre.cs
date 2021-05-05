using System.ComponentModel.DataAnnotations;

namespace FindMusicianApi.Models {


    public class Genre {

        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Color { get; set; }
        
    }

}