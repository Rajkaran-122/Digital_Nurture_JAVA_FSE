package com.cognizant.ormqueryhandson.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "question_option")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "op_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "op_qt_id")
    private Question question;

    @Column(name = "op_score")
    private Double score;

    @Column(name = "op_text")
    private String text;

    public Option() {
    }

    public Option(Question question, Double score, String text) {
        this.question = question;
        this.score = score;
        this.text = text;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "Option{" + "id=" + id + ", score=" + score + ", text='" + text + '\'' + '}';
    }
}
