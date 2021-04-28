using System.ComponentModel.DataAnnotations;

namespace FindMusicianApi.Models {

    public class Review {

        [Key]
        public int Id { get; set; }

        public int Stars { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }

        public string Artist { get; set; }

    }

}