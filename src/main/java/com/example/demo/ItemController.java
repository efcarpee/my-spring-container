package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {

    private List<String> items = new ArrayList<>();

    @GetMapping
    public List<String> getItems() {
        return items;
    }

    @PostMapping
    public String addItem(@RequestParam String name) {
        items.add(name);
        return "Item added: " + name;
    }

    @PutMapping("/{index}")
    public String updateItem(@PathVariable int index, @RequestParam String name) {
        if (index < 0 || index >= items.size()) return "Invalid index";
        items.set(index, name);
        return "Item updated at index " + index;
    }

    @DeleteMapping("/{index}")
    public String deleteItem(@PathVariable int index) {
        if (index < 0 || index >= items.size()) return "Invalid index";
        String removed = items.remove(index);
        return "Item deleted: " + removed;
    }
}
