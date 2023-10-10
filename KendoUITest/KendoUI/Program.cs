var builder = WebApplication.CreateBuilder(args);

//跨域代码1   ，在.net core中不能全部开启。开几个够用就行了
builder.Services.AddCors(options =>
options.AddPolicy("any",p => 
p.WithMethods("GET","POST","HEAD","PUT","DELETE","OPTIONS")
.AllowAnyOrigin()

//p.AllowAnyOrigin()
//.AllowAnyHeader()
//.AllowAnyMethod()
//.AllowCredentials()
));

// Add services to the container.
builder.Services.AddControllers();
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

//跨域代码2
app.UseRouting();

app.UseAuthorization();  //原有代码。2和3的位置不能错

//跨域代码3
app.UseCors("any");
app.UseEndpoints(endpoints => {
    endpoints.MapControllers().RequireCors("any");

});
//跨域代码 end

app.MapControllers();

app.Run();
