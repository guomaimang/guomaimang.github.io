---
article: false
date: 2021-05-01

---

# Block Collection

## 定义(声明) 和 赋值变量

|                      | 对或者错，错误原因                  |
| -------------------- | ----------------------------------- |
| int 3;               | cannot start with digit	int a=3; |
| double;              | double b;                           |
| int = 19;            | int c=19;                           |
| float myten = 10.23; | 正确                                |
| double_sum = 2.2;    | double sum = 2.2;                   |
| int that_value 212;  | int that_value = 212;               |

| Invalid variable naming| Valid variable naming| Description          |
| --------------------------------- | ------------------------------- | ------------------------------ |
| int monthly income                | int monthly_income              | Monthly income of integer type |
| ---                               | int counter**;**                | Counter of integer type        |
| double %scale                     | double scale**;**               | Scale of double type           |
| ---                               | double bike_sales**;**          | Sales of bike of double type   |

| Program Segment                                              | User input     | Answer |
| ------------------------------------------------------------ | -------------- | ------ |
| int first, second, third;cin >> first >> second >> third;    | 24 25 26       | 正确   |
| double fourth, fifth, sixth;cin >> fourth >> fifth >> sixth; | 24.4 25.5 26   | 正确   |
| int seventh, eighth, ninth;cin >> seventh >> eighth >> ninth; | 24.4 25.5 26.6 | ×      |
| double tenth, eleventh, twelfth;cin >> tenth >> eleventh >> twelfth; | 23.4 24.5      | ×      |

提示：长位向段位兼容

| Program Segment                | Answer |
| ------------------------------ | ------ |
| int d = 4;                     | √      |
| double a; int d = d * (6 + d); | ×      |
| double d = "3";                | ×      |

## 计算语句

| Program Segment           | Answer  |
| ------------------------- | ------- |
| int z = 9 + 2;            | 11      |
| int z = 9 - 2;            | 7       |
| int z = 5 * 2;            | 10      |
| int z = 8 / 4;            | 2       |
| int z = 9 / 4;            | **2**   |
| double z = 9 / 4;         | **2**   |
| int z = 222 / 300;        | 0       |
| double z = 222.0 / 300.0; | 0.74    |
| int z = 222 / 300.00;     | 0       |
| double z = pow(3, 6);     | **729** |

### 常用代码

#### 数组从大到小排序

```c++
#include <iostream> 
#include <iomanip>
using namespace std; 

int main() {
	const int ARRAY_SIZE = 10;
	int data[ARRAY_SIZE] = { 2, 64, 4, 33, 10, 12, 89, 68, 45, 7 };
	int i, insert;
	cout << "Data items in original order\n"; 
  
	for (i = 0; i < ARRAY_SIZE; i++) {
		cout << setw(4) << data[i];
	}
  
	for (int next = 1; next < ARRAY_SIZE; next++) { 
		insert = data[next];
		int moveItem = next;

		while ((moveItem > 0) && (data[moveItem - 1] < insert)) { // 改成大于号后变成由小到大排序
    	data[moveItem] = data[moveItem - 1];
			moveItem--;
  		}
    
		data[moveItem] = insert;
	}
  
	cout << "\nData items in new order\n"; 
  for (i = 0; i < ARRAY_SIZE; i++) {
		cout << setw(4) << data[i];
  	}
  
	cout << endl; 
  return 0;
}
```

#### 统计一个范围内的质数个数

Counting Prime Numbers

```c++
#include <iostream>
using namespace std;

bool isPrime(int n) {
  for (int i = 2; i < n; i++) {
    if (n % i == 0) {
      return false; 
    } 
  }
  return true; 
}

int countPrime(int n) {
  // base case
  if (n == 2) {
    return 1;
  }
  // general case
  if (isPrime(n)) {
    return countPrime(n - 1) + 1;
  } else{
    return countPrime(n - 1);
  } 
}

int main() {
int input;
cout << "Please enter an integer: "; 
cin >> input;
cout << "Total number of prime between 1 and " << input << " is " << countPrime(input) << "." << endl; 
}
```

### 三目运算

```c++

#include <stdio.h>
#include <iostream>
using namespace std;
int main()
{
	int a=0, b=3, c=2;
	a = (b > c ? b : c);      //b大于c，所以a=b=3
	cout << "a=" << a << endl;
}
```

```c++
#include <stdio.h>
#include <iostream>
using namespace std;
int main()
{
	int a=0, b=1, c=2;
	a = b > c ? b : c;      //b小于c，所以a=c=2
	cout << "a=" << a << endl;    
}
```

## Call by Pointer

```c++
#include <iostream>
using namespace std;


void swp(long* xp, long* yp){
    long t0 = *xp;
    long t1 = *yp;
    *xp = t1;
    *yp = t0;
}


int main() {
    long x=1,y=2;
    swp(&x,&y);
    cout << x << " " << y << "\n";

    return 0;
}
```

## size of()

```c++
#include <iostream>
using namespace std;

int main()
{
    cout << "Size of char : " << sizeof(char) << endl;
    cout << "Size of short : " << sizeof(short) << endl;
    cout << "Size of int : " << sizeof(int) << endl;
    cout << "Size of long  : " << sizeof(long) << endl;
    cout << "Size of float : " << sizeof(float) << endl;
    cout << "Size of double : " << sizeof(double) << endl;
    cout << "Size of long double : " << sizeof(long double) << endl;
    cout << "Size of bool : " << sizeof(bool) << endl;
    return 0;
}
```

结果（单位为byte）

> Size of char : 1
> Size of short : 2
> Size of int : 4
> Size of long  : 8
> Size of float : 4
> Size of double : 8
> Size of long double : 16
> Size of bool : 1

sizeof() 不需要用到其他任何库