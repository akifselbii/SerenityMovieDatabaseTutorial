using Hangfire;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using SerenityMovieDatabase.Default;
using System;

namespace SerenityMovieDatabase
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();



            BackgroundJob.Enqueue<Common.Jobs.SimpleJob>(job => job.Run());
            RecurringJob.AddOrUpdate<Common.Jobs.SimpleJob>(job => job.Run(), Cron.Hourly);
            RecurringJob.AddOrUpdate<Common.Jobs.SimpleJob>(job => job.Run(), "0 * * * *");


        }

        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStaticWebAssets();
                    webBuilder.UseStartup<Startup>();
                })
                .ConfigureAppConfiguration((builderContext, config) =>
                {
                    config.AddJsonFile("appsettings.bundles.json");
                    config.AddJsonFile($"appsettings.machine.json", optional: true);
                });
        }
    }
}
