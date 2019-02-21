using Microsoft.EntityFrameworkCore;
using TimeClockAPI.Models;

namespace TimeClockAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<User> Users { get; set; }
    }
}