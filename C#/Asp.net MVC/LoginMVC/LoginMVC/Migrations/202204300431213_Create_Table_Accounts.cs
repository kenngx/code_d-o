namespace LoginMVC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Create_Table_Accounts : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Accounts",
                c => new
                    {
                        UserName = c.String(nullable: false, maxLength: 50),
                        Password = c.String(nullable: false, maxLength: 50),
                        RoleID = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.UserName);
            
            CreateTable(
                "dbo.Role",
                c => new
                    {
                        RoleID = c.String(nullable: false, maxLength: 128),
                        RoleName = c.String(),
                    })
                .PrimaryKey(t => t.RoleID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Role");
            DropTable("dbo.Accounts");
        }
    }
}
