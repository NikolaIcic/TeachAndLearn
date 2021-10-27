using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

namespace TNLWebApp.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ChatMessage",
                columns: table => new
                {
                    ChatMessageID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    SenderID = table.Column<int>(type: "int", nullable: false),
                    ReceiverID = table.Column<int>(type: "int", nullable: false),
                    MsgRead = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    Message = table.Column<string>(type: "varchar(80)", maxLength: 80, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChatMessage", x => x.ChatMessageID);
                });

            migrationBuilder.CreateTable(
                name: "Group",
                columns: table => new
                {
                    GroupID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: true),
                    Subject = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: true),
                    OwnerID = table.Column<int>(type: "int", nullable: false),
                    PrivateGroup = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    Description = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Group", x => x.GroupID);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: true),
                    LastName = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: true),
                    Email = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: true),
                    Gender = table.Column<string>(type: "varchar(8)", maxLength: 8, nullable: true),
                    DateOfBirth = table.Column<string>(type: "varchar(10)", maxLength: 10, nullable: true),
                    Faculty = table.Column<string>(type: "varchar(60)", maxLength: 60, nullable: true),
                    Role = table.Column<string>(type: "varchar(10)", maxLength: 10, nullable: true),
                    Description = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true),
                    Password = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: true),
                    Subject = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: true),
                    Rating = table.Column<float>(type: "float", nullable: false),
                    RatingCount = table.Column<int>(type: "int", nullable: false),
                    GroupID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_User_Group_GroupID",
                        column: x => x.GroupID,
                        principalTable: "Group",
                        principalColumn: "GroupID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GroupChat",
                columns: table => new
                {
                    GroupChatID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Message = table.Column<string>(type: "varchar(80)", maxLength: 80, nullable: true),
                    SenderNum = table.Column<int>(type: "int", nullable: false),
                    SenderName = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true),
                    GroupID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GroupChat", x => x.GroupChatID);
                    table.ForeignKey(
                        name: "FK_GroupChat_Group_GroupID",
                        column: x => x.GroupID,
                        principalTable: "Group",
                        principalColumn: "GroupID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_GroupChat_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GroupChat_GroupID",
                table: "GroupChat",
                column: "GroupID");

            migrationBuilder.CreateIndex(
                name: "IX_GroupChat_UserId",
                table: "GroupChat",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_User_GroupID",
                table: "User",
                column: "GroupID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChatMessage");

            migrationBuilder.DropTable(
                name: "GroupChat");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Group");
        }
    }
}
