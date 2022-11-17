using OfficeOpenXml.FormulaParsing.Excel.Functions.RefAndLookup;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Services;
using SerenityMovieDatabase.Default;
using SerenityMovieDatabase.Default.Endpoints;
using SerenityMovieDatabase.Default.Forms;
using SerenityMovieDatabase.Default.Pages;
using System;
using System.Collections.Generic;
using static SerenityMovieDatabase.Texts;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Dapper;

namespace SerenityMovieDatabase.Common.Jobs
{
    public class SimpleJob
    {
        MovieRow movie;
        MovieRow movieRow;
        // If you want to run SQL with a connection, add this
        private readonly ISqlConnections Connections;
        public SimpleJob(ISqlConnections connections) 
        {
             this.Connections = connections ?? throw new ArgumentNullException(nameof(connections));
        }

        public void Run()
        {
            movie = new MovieRow
            {
                Title = "The Lands",
                Description = "Lord learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                Storyline = "By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.",
                Year = 1949,
                ReleaseDate = new DateTime(1949, 03, 31),
                Runtime = 165
            };

            using (var connection = Connections.NewFor<MovieRow>())
            {
                movieRow = connection.QuerySingleOrDefault<MovieRow>("select * from [mov].[Movie] where Title like " +"'"+ movie.Title.ToString()+"'");
                if(movieRow == null)connection.Insert(movie);
                if(movieRow != null)
                {
                    movieRow.Title = "Lords".ToString();
                    connection.UpdateById(movieRow);
                }
                
            }

        }

    }
}