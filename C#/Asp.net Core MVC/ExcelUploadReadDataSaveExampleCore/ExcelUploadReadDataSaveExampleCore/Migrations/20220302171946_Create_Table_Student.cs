using Microsoft.EntityFrameworkCore.Migrations;

namespace ExcelUploadReadDataSaveExampleCore.Migrations
{
    public partial class Create_Table_Student : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MST = table.Column<int>(type: "int", nullable: false),
                    TenDN = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NCC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NgayCap = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
