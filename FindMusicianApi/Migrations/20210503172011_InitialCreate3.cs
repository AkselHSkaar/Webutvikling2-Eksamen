using Microsoft.EntityFrameworkCore.Migrations;

namespace FindMusicianApi.Migrations
{
    public partial class InitialCreate3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NumberOfRatings",
                table: "Artist",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumberOfRatings",
                table: "Artist");
        }
    }
}
