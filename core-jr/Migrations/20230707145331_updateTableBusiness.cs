using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace core_jr.Migrations
{
    public partial class updateTableBusiness : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CompanyLogo",
                table: "BusinessData",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyLogo",
                table: "BusinessData");
        }
    }
}
