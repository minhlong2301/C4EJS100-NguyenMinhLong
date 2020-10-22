var colors = ["red", "gray", "blue", "purple", "cyan"];
for (var j=1; j<=4; j++)
{
    for (let i=1; i <= 4; i++) {
        color(colors[j]);
        fd(50*j)
        rt(90)
      }
}