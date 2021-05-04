using System.ComponentModel.DataAnnotations;

namespace FindMusicianApi.Models {


    public class Newsletter {

        [Key]
        public int Id { get; set; }

        public string Email { get; set; }
        
    }

}