using Microsoft.EntityFrameworkCore;
using CrudApi.Context;

var myAllowSpecifcOrigins = "myAllowSpecificOrigins";   //adicionando nivel/origem de conexao de sistema
var builder = WebApplication.CreateBuilder(args);

//Adds services to the container.
builder.Services.AddControllers();

//adicionando string de conexao do banco de dados
builder.Services.AddDbContext<FuncionarioContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoPadrao")));

// Habilitar Cors para ser usado pelo sistema, mais expecificamente rota de conexão
builder.Services.AddCors(options => options.AddPolicy(name: myAllowSpecifcOrigins, builder => builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader()));

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Utilização do Cors para ser usado pelo sistema pela rota de conexão
app.UseCors(myAllowSpecifcOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();

