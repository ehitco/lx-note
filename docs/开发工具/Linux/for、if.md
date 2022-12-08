## for
使用 `for in`，可遍历数组。

```bash
for name [ [ in [ word ... ] ] ; ] do list ; done
```

对其中的分号，可使用换行替代。如下示例，输出 1 到 100。

```bash
for i in {1..100}; do echo $i; done

for i in {1..100}
  do echo $i
done
```

除了 `for in`，也可以使用常见的 for 循环样式。

![](https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207301221298.png)

## if

`if` 常与 `[[ ]]` 进行搭配。

![](https://cdn.jsdelivr.net/gh/Merlin218/image-storage/picGo/202207301224044.png)
