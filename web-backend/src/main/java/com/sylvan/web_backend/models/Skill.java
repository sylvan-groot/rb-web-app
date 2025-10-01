package com.sylvan.web_backend.models;
import jakarta.persistence.*;

@Entity
@Table(name = "skills")
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category")
    private String category;

    @Column(name = "name")
    private String name;

    @Column(name = "exp")
    private Integer exp;

    @Column(name = "info")
    private String info;

    public Skill() {}

    public Skill(String category, String name, Integer exp, String info) {
        this.category = category;
        this.name = name;
        this.exp = exp;
        this.info = info;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Integer getExp() { return exp; }
    public void setExp(Integer exp) { this.exp = exp; }

    public String getInfo() { return info; }
    public void setInfo(String info) { this.info = info; }
}
