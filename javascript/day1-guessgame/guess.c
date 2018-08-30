#include<stdio.h>
#include<stdlib.h>
void startgame(char[]);
int main()
{
    char name[10];
    printf("pls enter ur name\n");
    scanf("%c",name);
    startgame(name);

}
void startgame(char name1[])
{
   int count=10,target,guess;
   target= (rand() %100) + 1;
while (count!=0)
{   
    printf("ur present count is=%d \n",count);
    printf("pls enter ur guess \n");
    scanf("%d",&guess);
    if(guess>target)
    {
        printf("your guess is high \n");
        count--;
    }
     else if(guess<target)
    {
    printf("ur guess is too low \n");
        count--;  
    }
    else 
    {
    count--;
    printf("%s ur guess is correct \n",name1);
    printf("you took =%d guesses \n",count);
    break;
    }
    if(count==0)
    {
        printf("sorry u ran out of guesses:");
        break;
    }
}
return;
}