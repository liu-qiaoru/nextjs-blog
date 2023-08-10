describe('net-blog', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
    });

    it('Navigates to ssg-ssr page', () => {
        cy.visit('http://localhost:3000'); // 访问起始页面
        cy.contains(
            'When to Use Static Generation v.s. Server-side Rendering',
        ).click(); // 点击文本内容为 "x x x" 的按钮
        cy.url().should('include', '/posts/ssg-ssr'); // 确认页面已经跳转到目标地址
    });
});
