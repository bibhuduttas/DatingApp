using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForLoginDto
    {
        [Required]
        public string Username { get; set; }

        [StringLength(8, MinimumLength = 4, ErrorMessage = "password should be between 4 and 8 characters")]
        [Required]
        public string Password { get; set; }
    }
}