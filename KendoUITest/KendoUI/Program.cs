var builder = WebApplication.CreateBuilder(args);

//�������1   ����.net core�в���ȫ�����������������þ�����
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

//�������2
app.UseRouting();

app.UseAuthorization();  //ԭ�д��롣2��3��λ�ò��ܴ�

//�������3
app.UseCors("any");
app.UseEndpoints(endpoints => {
    endpoints.MapControllers().RequireCors("any");

});
//������� end

app.MapControllers();

app.Run();
