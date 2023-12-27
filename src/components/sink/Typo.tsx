import styled from "styled-components";

const Div = styled.div`
  padding: 1rem 0;
`;
function Typo() {
  return (
    <Div>
      <h1>HTML Basic Elements</h1>

      <p>
        The purpose of this HTML is to help determine what default settings are
        with CSS and to make sure that all possible HTML Elements are included
        in this HTML so as to not miss any possible Elements when designing a
        site.
      </p>

      <hr />

      <h1>Headings</h1>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <hr />

      <h1>Paragraph</h1>

      <img src="http://placehold.it/250x250" alt="Sample image" />
      <p>
        Lorem ipsum dolor sit amet,{" "}
        <a href="#" title="test link">
          test link
        </a>{" "}
        adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec
        faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero
        nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent
        mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu
        volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus
        eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem,
        consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue
        quis tellus.
      </p>

      <p>
        Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing
        elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus.
        Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
        imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis,
        massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim
        diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien
        fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at,
        commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.
      </p>

      <hr />

      <h1>List Types</h1>

      <h3>Definition List</h3>
      <dl>
        <dt>Definition List Title</dt>
        <dd>This is a definition list division.</dd>
      </dl>

      <h3>Ordered List</h3>
      <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ol>

      <h3>Unordered List</h3>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>

      <hr />

      <h1>Fieldsets, Legends, and Form Elements</h1>

      <fieldset>
        <legend>Legend</legend>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
          dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis
          suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at,
          tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis
          luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget
          metus.
        </p>

        <form>
          <h2>Form Element</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
            iaculis suscipit dui.
          </p>

          <p>
            <label htmlFor="text_field">Text Field:</label>
            <br />
            <input type="text" id="text_field" />
          </p>

          <p>
            <label htmlFor="text_area">Text Area:</label>
            <br />
            <textarea id="text_area"></textarea>
          </p>

          <p>
            <label htmlFor="select_element">Select Element:</label>
            <br />
            <select name="select_element">
              <optgroup label="Option Group 1">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </optgroup>
              <optgroup label="Option Group 2">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </optgroup>
            </select>
          </p>

          <p>
            <label htmlFor="radio_buttons">Radio Buttons:</label>
            <br />
            <input
              type="radio"
              className="radio"
              name="radio_button"
              value="radio_1"
            />{" "}
            Radio 1<br />
            <input
              type="radio"
              className="radio"
              name="radio_button"
              value="radio_2"
            />{" "}
            Radio 2<br />
            <input
              type="radio"
              className="radio"
              name="radio_button"
              value="radio_3"
            />{" "}
            Radio 3<br />
          </p>

          <p>
            <label htmlFor="checkboxes">Checkboxes:</label>
            <br />
            <input
              type="checkbox"
              className="checkbox"
              name="checkboxes"
              value="check_1"
            />{" "}
            Radio 1<br />
            <input
              type="checkbox"
              className="checkbox"
              name="checkboxes"
              value="check_2"
            />{" "}
            Radio 2<br />
            <input
              type="checkbox"
              className="checkbox"
              name="checkboxes"
              value="check_3"
            />{" "}
            Radio 3<br />
          </p>

          <p>
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" className="password" name="password" />
          </p>

          <p>
            <label htmlFor="file">File Input:</label>
            <br />
            <input type="file" className="file" name="file" />
          </p>

          <p>
            <input className="button" type="reset" value="Clear" />{" "}
            <input className="button" type="submit" value="Submit" />
          </p>
        </form>
      </fieldset>

      <hr />

      <h1>Tables</h1>

      <table>
        <tr>
          <th>Table Header 1</th>
          <th>Table Header 2</th>
          <th>Table Header 3</th>
        </tr>
        <tr>
          <td>Division 1</td>
          <td>Division 2</td>
          <td>Division 3</td>
        </tr>
        <tr className="even">
          <td>Division 1</td>
          <td>Division 2</td>
          <td>Division 3</td>
        </tr>
        <tr>
          <td>Division 1</td>
          <td>Division 2</td>
          <td>Division 3</td>
        </tr>
      </table>

      <hr />

      <h1>Misc Stuff - abbr, acronym, pre, code, sub, sup, etc.</h1>

      <aside>
        <h1>This is an aside</h1>
        <p>Nullam dignissim convallis est. Nullam dignissim convallis est.</p>
      </aside>

      <p>
        Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet,
        consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque
        aliquam. <cite>cite</cite>. Nunc iaculis suscipit dui. Nam sit amet sem.
        Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula,
        nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat
        justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec
        sed tellus eget sapien fringilla nonummy. ante. Suspendisse quam sem,
        consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue
        quis tellus. <abbr title="Avenue">AVE</abbr>
      </p>

      <pre>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
          dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis
          suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at,
          tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis
          luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget
          metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla
          nonummy. a ante. Suspendisse quam sem, consequat at, commodo vitae,
          feugiat in, nunc. Morbi imperdiet augue quis tellus.{" "}
          <abbr title="Avenue">AVE</abbr>
        </p>
      </pre>

      <blockquote>
        "This stylesheet is going to help so freaking much." <br />
        -Blockquote
      </blockquote>
    </Div>
  );
}

export default Typo;
