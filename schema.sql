create table users (
	id INT unsigned auto_increment not null,
    primary key(id),
    name varchar(255),
    email varchar(255),
    created_at datetime,
    updated_at datetime
);
create table posts (
	id INT unsigned auto_increment not null,
    id_user INT unsigned not null,
    primary key(id),
    title varchar(255),
    description varchar(255),
    created_at datetime,
    updated_at datetime,
    foreign key (id_user) references users(id)
)