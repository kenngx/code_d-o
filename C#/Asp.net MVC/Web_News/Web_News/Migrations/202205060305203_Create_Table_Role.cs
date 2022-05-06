namespace Web_News.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Create_Table_Role : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Role",
                c => new
                    {
                        RoleID = c.String(nullable: false, maxLength: 50),
                        RoleName = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.RoleID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Role");
        }
    }
}
